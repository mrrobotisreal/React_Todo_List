const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  lists: [],
});
const listSchema = new Schema({
  creationDate: String,
  tasks: [],
});
const taskSchema = new Schema({
  name: String,
  completed: Boolean,
  dateCompleted: String,
  difficulty: Number,
});
// difficulty: 1 = easy, 2 = medium, 3 = difficult

const List = mongoose.model('List', listSchema);
const Task = mongoose.model('Task', taskSchema);

const createUser = (name:string, username:string, password:string) => {};

const createList = () => {};

const addTask = (name:string, difficult:number) => {};

const completeTask = (completed:boolean) => {};

module.exports.createUser = createUser;
module.exports.createList = createList;
module.exports.addTask = addTask;
module.exports.completeTask = completeTask;