import Dexie from "dexie";
//import "dexie-observable";

var db = new Dexie("speech");
db.version(1).stores({
  speechs: "++id,title,author,date,description,keywords"
});

export function getList() {
  return db.speechs;
}

export async function addData(
  title,
  author,
  date,
  description,
  keywords,
  selectedId
) {
  if (selectedId) {
    var id = await db.speechs
      .where("id")
      .isEqual(1)
      .modify({
        title: title,
        author: author,
        date: date,
        description: description,
        keywords: keywords
      });
    return id;
  } else {
    var id = await db.speechs.put({
      title: title,
      author: author,
      date: date,
      description: description,
      keywords: keywords
    });
    return id;
  }
}
