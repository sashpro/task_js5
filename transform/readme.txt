Массив
[
{"name":"root", "parentId":null, "id":100},
{"name":"1stlevelChild1", "parentId":100, "id":201},
{"name":"1stlevelChild2", "parentId":100, "id":202},
{"name":"2ndlevelChild1", "parentId":201, "id":301},
{"name":"2ndlevelChild2", "parentId":201, "id":301}
]

Преобразовать в иерархический
[
{
"name":"root", 
"parentId":null, 
"id":100, 
"childs":[
{
"name":"1stlevelChild1", 
"parentId":100, 
"id":201, 
"childs":[
{"name":"2ndlevelChild1", "parentId":201, "id":301, "childs":[]},
{"name":"2ndlevelChild2", "parentId":201, "id":301, "childs":[]}
]
},
{
"name":"1stlevelChild2", 
"parentId":100, 
"id":202,
"childs":[]
}
]
}
]