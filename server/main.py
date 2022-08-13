from fastapi import FastAPI

from pprint import pprint
from uuid import uuid4
import sqlite3

app = FastAPI()
con = sqlite3.connect("./db/db.db")
cur = con.cursor()

@app.get("/")
async def home():
  return {
    "msg": "worked"
  }

@app.get("/notes/{noteId}/")
async def notes(noteId: str):
  sql = f"SELECT * FROM notes WHERE id = '{noteId}';"
  sqlResult = cur.execute(sql)
  fetchone = sqlResult.fetchone()
  
  if fetchone:
    return {
      "id": fetchone[0],
      "content": fetchone[1]
    }
  return {
    'type': 'error',
    'msg': f'id {noteId} not exest in data base'
  }

@app.get('/edit/note/')
async def editNote(noteId: str, content: str=''):
  sql = f"SELECT * FROM notes WHERE id='{noteId}'"
  sqlResult = cur.execute(sql)
  fetchone = sqlResult.fetchone()
  
  if fetchone:
    content = content.replace("'", "''")
    sql = f"UPDATE notes SET content='{content}' WHERE id='{noteId}'"
    
    try:
      cur.execute(sql)
      con.commit()
      sqlResult = cur.execute(f"SELECT * FROM notes WHERE id='{noteId}'")
      fetchone = sqlResult.fetchone()
      return {
        "content": fetchone[1],
        "id": fetchone[1],
        "edited": True
      }
    except:
      return {
        "msg": "can't edit this row i (server error)"
      }
  return {
    "msg": f"can't edit row id '{noteId}' is not found in database",
    "edited": False
  }

@app.get('/make/note/')
async def makeNote(content: str = ''):
  noteId = uuid4()
  sql = f"INSERT INTO notes VALUES ('{noteId}', '{content}')"
  cur.execute(sql)
  con.commit()
  
  return {
    "id": noteId,
    "content": content
  }
