var guests_array = [];
var enhanced_guest_array = []; 
var name_of_guest;
function enter() {
    name_of_guest = document.getElementById("enter_name").value;
    guests_array.push(name_of_guest);
    name_of_guest = document.getElementById("enter_name").value; 
    console.log(guests_array);
    console.log(enhanced_guest_array)
    document.getElementById("display_names").innerHTML = guests_array;
}
  
function show() {
    var length_of_array = guests_array.length;
    console.log(length_of_array);
    console.log("In the function!");
    for (var k = 0; k < length_of_array; k++) {
        console.log("In the loop!");
        enhanced_guest_array.push("<h4 Guest:>"+guests_array[k]+"</h4>");
        console.log(enhanced_guest_array);
        var no_commas = enhanced_guest_array.join("");
        document.getElementById("display_list").innerHTML = no_commas;

    }
}


function sort() {
    var sorted_array = enhanced_guest_array.sort();
    var commas_nono = sorted_array.join("");
    document.getElementById("sorted_list").innerHTML = commas_nono;
}

function search() {
    var name = document.getElementById("search_name").value;
    var find_names = guests_array.find(element = name);
    console.log(find_names);
    document.getElementById("search_result").innerHTML = find_names;
}