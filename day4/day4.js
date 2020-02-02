var passwords = [];

for (password = 372037; password < 905157; password++)
{
    if(isValidPassword(password))
    {
        passwords.push(password);
    }
}

console.log("Number of valid passwords: " + passwords.length);

function isValidPassword(password)
{
    var digits = password.toString().split("");
    var hasDouble = false;

    for(i = 0; i < digits.length - 1; i++)
    {
        var current = digits[i];
        var next = digits[i + 1];

        if(current > next)
        {
            return false;
        }

        if(current == next)
        {
            hasDouble = true;
        }
    }

    if(hasDouble)
    {
        console.log("Valid password found: " + password);

        return true;    
    }

    return false;
}
