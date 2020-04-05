

const toolbar = [
    [{'size': [] }], 
    [ 'bold', 'italic', 'underline', 'strike' ],
    [{ 'color': [] }, { 'background': [] }], 
    [{ 'script': 'super' }, { 'script': 'sub' }], 
    [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
    [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }], 
    [ 'direction', { 'align': [] }], 
    [ 'link', 'image', 'video', 'formula' ],
    [ 'clean' ]
]


function guid() {
function s4() {
return Math.floor((1 + Math.random()) * 0x10000)
.toString(16)
.substring(1);
}
return (
s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4()
);
}

var docId = guid();

//Instantiate QuillJS editor
var editor1 = new Quill("#quillEditor1", { 
modules: { 
'toolbar': toolbar }, theme: "snow" });

var editor2 = new Quill("#quillEditor2",{ 
modules: { 
'toolbar': toolbar },  theme: "snow" });

//Wave configuration
var config = {
app: "quilljs",
editor: editor1,
docId: docId,
username: "Marko"
};

config.username = "Marko"; //unqiue user name or email address
config.apiKey = "dc1e5915-a56b-4b22-a8b6-a8392aeee8de"; // this is your actual API Key
config.domain = "https://tinyurl.com"; //Full URL is : https://tinyurl.com/convergence-docs

//start coediting
var codox = new Codox();
codox.start(config);

var codox2 = new Codox();
codox2.start(Object.assign({}, config, {editor: editor2, username: "Polo"}));
