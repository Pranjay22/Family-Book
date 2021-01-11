var images =
["blob:https://web.whatsapp.com/965158dd-e478-4838-8e56-157264ff923a","blob:https://web.whatsapp.com/98c897de-05c4-47d4-819c-e13fd35b1158","blob:https://web.whatsapp.com/7ace60c8-a1cd-400d-8225-5dca7cbd712e","blob:https://web.whatsapp.com/3d59d24b-2af7-470c-b9d7-b9f50cb3174f"];
var names = ["Family Book", "Jitendra Singh", "Priyanka Singh", "Himiksha Singh", "Pranjay Singh"];
var i = 0 ;
function update () 
{
    i++
    var numbers_of_family_members_in_array = 5
    if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }