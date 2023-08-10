function findIndices(input1, input2) {
    var indices_list = [];
    
    for (var i = 0; i < input1.length; i++) {
        var char = input1[i];
        var index = input2.indexOf(char);
        if (index !== -1) {
            indices_list.push(index);
            input1 = input1.slice(0, i) + input1.slice(i + 1);
            input2 = input2.slice(0, index) + input2.slice(index + 1);
            i--;
        }
    }
    
    var concatenated_str = input1 + input2;
    var lent = concatenated_str.length;
    var lis = ['FRIENDS', 'LOVERS', 'AFFECTION', 'MARRIAGE', 'ENEMY', 'SISTER'];

    while (lis.length !== 1) {
        var result = (lent - 1) % lis.length;
        if (result >= 0) {
            var right = lis.slice(result + 1);
            var left = lis.slice(0, result);
            lis = right.concat(left);
        } else {
            lis = lis.slice(0, lis.length - 1);
        }
    }

    return lis[0];
}

function checkRelationship() {
    // Get the values from the input fields
    var name1 = document.getElementById('name1').value.toLowerCase().split(' ').join('');
    var name2 = document.getElementById('name2').value.toLowerCase().split(' ').join('');

    // Call the Python logic (findIndices function) using the provided inputs
    var relationshipStatus = findIndices(name1, name2);

    // Display the result
    var resultDiv = document.getElementById('result');
    resultDiv.innerText = "Relationship status: " + relationshipStatus;

    // Prevent form submission
    return false;
}
