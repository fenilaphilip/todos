class Todo{
id: string;
text: string;
constructor(todotext: string){
    this.id = new Date().toISOString();
    this.text = todotext;
}
}

export default Todo;