let pictureArr = [];
$(document).ready($.ajax({
    url: "https://api.unsplash.com/photos/random?count=30&client_id=b296a3bdc8d6cc377181f00e575b3a8d94b2051f1488d9518e535763e258eab1",
    success: function (data) {
        data.forEach(function (uploads) {
            let picture = {
                description: uploads.description,
                like: uploads.user.total_likes,
                picture: uploads.urls.small,
                id: uploads.id
            }
            pictureArr.push(picture);
            document.getElementById("imagedisplay").innerHTML +=
                `
                  <div class="col-md-4 col-1-xs image-card"><a>
                   <img id="uploads" class="card-img" value= ${
                       uploads.id}
                       src=${
                     uploads.urls.small
                       } onclick='picDescription(this.attributes["value"].value)'/></a>
                      </div>`;
        });

    }

}));




function picDescription(id) {
    this.id = picDescription.caller.arguments[0].target.value;
    pictureArr.forEach(function (data) {

        if (data.id == id) {
            console.log(data);
            document.getElementById("modal-picture").src = data.picture;
            document.getElementById("description").innerHTML = data.description;
            document.getElementById("likes").innerHTML = '&nbsp;' + data.like + '&nbsp;';

            $("#pic-description").modal("show");
        }

    })

}