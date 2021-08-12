$(document).ready(function () {

    // var url = window.location.search;
    // var postId;

    // if (url.indexOf("?post_id=") !== -1) {
    //     postId = url.split("=")[1];
    //     getPostData(postId);
    // }

    var lostFoundIndicatorRadio = $("#lostFoundIndicator");
    var petNameInput = $("#petName");
    var petTypeInput = $("#petType");
    var descriptionInput = $("#description");
    var locationInput = $("#location");
    var contactNameInput = $("#contactName");
    var contactNumberInput = $("#contactNumber");
    var contactEmailInput = $("#contactEmail");
    var petPicFile = $("#petPic");
    var addForm = $("add-form");

    $(addForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        // if (!lostFoundIndicatorRadio.val() || petTypeInput.val().trim() ||
        //     descriptionInput.val().trim() || locationInput.val().trim() ||
        //     contactNameInput.val().trim() || contactNumberInput.val().trim()) {
        //     return;
        // }

        var newPost = {
            lostIndicator: lostFoundIndicatorRadio.val(),
            petName: petTypeInput.val().trim(),
            petType: petTypeInput.val(),
            description: descriptionInput.val().trim(),
            location: locationInput.val().trim(),
            contactName: contactNameInput.val().trim(),
            contactNumber: contactNumberInput.val().trim(),
            contactEmail: contactEmailInput.val().trim(),
            petPic: petPicFile.val()
        };
        console.log(newPost);

        submitPost(newPost)

        // if (updating) {
        //     newPost.id = postId;
        //     updatePost(newPost);
        // }
        // else {
        //     submitPost(newPost);
        // }
    });

    function submitPost(Post) {
        $.post("/api/posts", Post, function () {
            console.log(newPost)
        })
    }

    function getPostData(id) {
        $.get("/api/posts/" + id, function (data) {
            if (data) {
                lostFoundIndicatorRadio.val(data.lostIndicator),
                    petNameInput.val(data.petName),
                    petTypeInput.val(data.petType),
                    descriptionInput.val(data.description),
                    locationInput.val(data.location),
                    contactNameInput.val(data.contactName),
                    contactNumberInput.val(data.contactNumber),
                    contactEmailInput.val(data.contactEmail),
                    petPicFile.val(data.petPic)
            }
        })
    }

    function updatePost(post) {
        $.ajax({
            method: "PUT",
            url: "api/posts",
            data: post
        })
            .then(function () {
                window.location.href = "/search"
            });
    };




});