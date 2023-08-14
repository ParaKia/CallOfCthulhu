const fileInput = document.getElementById('file-input');
const avatarImg = document.getElementById('avatar-img');
let cropper = null;


fileInput.addEventListener('change', function (event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            avatarImg.src = e.target.result;
        };
        reader.readAsDataURL(selectedFile);
    }
    
});

avatarImg.onload = function () {
    // 图像加载完成后创建 Cropper 实例
    if (cropper) {
        cropper.destroy();  // 销毁之前的 Cropper 实例
    }

    cropper = new Cropper(avatarImg, {
        aspectRatio: 4 / 5,
        viewMode: 3,

    });
    parent.window.cro = cropper;
};
//const Alliframe = document.querySelector("iframe");
//const iframedocument = Alliframe.contentDocument;

//$().cropper("getCroppedCanvas", { maxWidth: 4096, maxHeight: 4096 })