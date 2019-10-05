$(function () {
    var content = $('#results');
    var API_KEY = 'be45244ac7464c37aa0760726f2f884a';
    var API = 'https://newsapi.org/v2/top-headlines?apiKey=be45244ac7464c37aa0760726f2f884a&country=ph';
})

$('#country').on('change', function () {
    var isDirty = !this.option[this.selectedIndex].defaultSelected;

    if (isDirty) {
        $('#country').on('click',function () {
            var selectedCountry = $(this), children =("option:selected").value();

            console.log(selectedCountry);

            $.ajax ({
                type : 'GET',
                url : API+API_KEY+'#country='+selectedCountry,
                dataType : 'json',
            })

            .then(function(data) {
                content.empty();


                console.log(data);
                var items = data.articles;
                for(var i = 0; i < items.length; i++) {
                    console.log(items[i]);

                    var li  = `<li class="">

                        <div class="card">
                                <img src = "${items[i],urlToImage}">
                                <p>${items[i],title}</p>
                                <p>${items[i],author}</p>
                                <p>${items[i],description}</p>
                                <a href = "">${items[i],url}</a>
                        </div>

                    </li>`

                    content.append(li);
                }
            })
        })
    } else {
        alert("default value");
    }
});

})