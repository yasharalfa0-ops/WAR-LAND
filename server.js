import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 10000);
const HOST = '0.0.0.0';
const MODEL = process.env.OPENAI_MODEL || 'gpt-5.6';
const API_KEY = process.env.OPENAI_API_KEY;

const send = (res, code, body, type='application/json') => {
  res.writeHead(code, {'Content-Type': type, 'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Content-Type'});
  res.end(type === 'application/json' ? JSON.stringify(body) : body);
};

async function jessi(req, res) {
  if (!API_KEY) return send(res, 500, {error:'OPENAI_API_KEY is not configured on the server.'});
  let raw='';
  for await (const chunk of req) raw += chunk;
  let body={};
  try { body=JSON.parse(raw || '{}'); } catch { return send(res,400,{error:'Invalid JSON'}); }
  const system = `You are JESSI, the in-game strategic assistant for WAR LAND. Answer in Persian unless the player asks for English. Analyze the supplied game state. For a player-controlled country, advise only and never issue executable commands. For an unselected AI country, return strategic recommendations that the game AI may execute. Keep answers concise and practical.`;
  const input = `${system}\nGAME STATE:\n${JSON.stringify(body.state || {})}\nQUESTION:\n${body.question || 'Analyze the current situation.'}`;
  try {
    const r = await fetch('https://api.openai.com/v1/responses', {
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':`Bearer ${API_KEY}`},
      body:JSON.stringify({model:MODEL,input})
    });
    const data=await r.json();
    if(!r.ok) return send(res,r.status,{error:data.error?.message || 'OpenAI API request failed'});
    return send(res,200,{text:data.output_text || ''});
  } catch (e) { return send(res,502,{error:'JESSI connection failed'}); }
}

const server=http.createServer(async (req,res)=>{
  if(req.method==='OPTIONS') return send(res,204,'','text/plain');
  if(req.url==='/api/jessi' && req.method==='POST') return jessi(req,res);
  if(req.url==='/health') return send(res,200,{status:'ok',service:'WAR LAND'});
  const requested=req.url==='/'?'/index.html':req.url.split('?')[0];
  const file=path.resolve(__dirname,'.'+requested);
  const root=path.resolve(__dirname);
  if(!file.startsWith(root + path.sep) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) return send(res,404,{error:'Not found'});
  const ext=path.extname(file);
  const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json'};
  send(res,200,fs.readFileSync(file),types[ext]||'application/octet-stream');
});
server.listen(PORT,HOST,()=>console.log(`WAR LAND server running on ${HOST}:${PORT}`));
