from fastapi import FastAPI

from pprint import pprint
from uuid import uuid4
import sqlite3

app = FastAPI()
con = sqlite3.connect("./db/db.db")
cur = con.cursor()

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

@app.get('/add/note/{content}')
async def addNote(content: str = ''):
  noteId = uuid4()
  sql = f"INSERT INTO notes VALUES ('{noteId}', '{content}')"
  cur.execute(sql)
  con.commit()
  
  return {
    "id": noteId,
    "content": content
  }
