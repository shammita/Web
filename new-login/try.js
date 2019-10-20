firebase.initializeApp(config);


//<input type = "file" value = "upload" id = "uploadButton">

//<button type = "button" id = "downloadButton">download</button>

var storage = firebase.storage();

var button = document.getElementById('uploadButton');
var downloadButton = document.getElementById('downloadButton');



var imgRef = storage.ref('nishan/logo.jpg')


downloadButton.addEventListener('click', function() {
    imgRef.getDownloadURL().then(function(url) {
        console.log("logo download")
        console.log(url)
    })
})



button.addEventListener('change', function(e) {
    var file = e.target.files[0];

    var storageRef = storage.ref('nishan' + file.name);
    var uploadTask = storageRef.put(file)

    uploadTask.on('state_change', loadUpload, errUpload, completeUpload)

    function loadUpload(data) {
        var percent = (data.bytesTransferred / data / totalBytes) * 100

        progress.value = percent;

    }

    function errUpload(err) {
        console.log('error')

        console.log(err)
    }

    function completeUpload(data) {
        console.log('complete')
        console.log(data)
    }
})