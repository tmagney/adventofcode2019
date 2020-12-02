var passwords = [];

for (password = 372037; password < 905157; password++)
{
    if(isValidPassword(password))
    {
        passwords.push(password);
    }
}

console.log("Number of valid passwords: " + passwords.length);
//needs one double, then there can be an odd number of multiples.
function isValidPassword(password)
{
    var digits = password.toString().split("");
    var hasDouble = false;

    for(i = 0; i < digits.length; i++)
    {
        //check last digit to make sure it doesnt make a triple
        if(i == digits.length -1)
        {
            if(digits[i] <= digits[i -1])
            {
                return false;
            }
        }         
        //if we skip the next index, we need to look back or forward.

        var current = digits[i];
        var next = digits[i + 1];

        if(current > next)
        {
            return false;
        }
        //Still not detecting tiples. Middle #s are the issue.
        if(current == next)
        {
            if(next > digits[i + 2])
            {        
                return false;
            }
            //not 389
            i = i + 1;
            hasDouble = true;
            //244 is too low.
            //var re = new RegExp(current, 'g');
            //var occurences = (password.toString().match(re || [])).length; 
            // if(occurences == 3 || occurences == 5)
            // {
            //     return false;
            // }
            // if(occurences % 2 > 0)
            // { 
            //     return false;
            // }

            // hasDouble = true;
        }
    }

    if(hasDouble)
    {
        console.log("Valid password found: " + password);

        return true;    
    }

    return false;
}
