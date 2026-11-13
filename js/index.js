document.getElementById("add").addEventListener("click", addItem);

// Intial variable setting
const items = [];
let validItem = true;
let lootText = "";
let totalLootValue = 0;
let warningText = "";

document.getElementById("loot").innerHTML = "None";
document.getElementById("total").innerHTML = `0`;

function addItem()
{
    // gets and sets the item inserted
    let itemName = document.getElementById("name").value;
    let itemValue = parseInt(document.getElementById("itemValue").value);
    warningText = "";

    // Validation sequence that checks valid name and valid value
    if (itemName == "") { warningText = "A loot name is required"; }
    else if (isNaN(itemValue)) { warningText = "Loot value is not valid"; }
    else if (itemValue < 0) { warningText = "Loot value cannot be negative"; }
    else
    {
        // hides warning text and creates and adds valid item to array
        warningText = "";
        let newItem = {name: itemName, value: itemValue};
        items.push(newItem);

        // loop that refreshes the loot list and adds new item
        lootText = "";
        for (let i = 0; i < items.length; i++)
        {
            lootText += `[${i + 1}]\t ${items[i].name}\t -\t ${items[i].value}\n`;
        }

        // second loop that adds up value. For readability could be combined with loop above
        totalLootValue = 0;
        for (let i = 0; i < items.length; i++)
        {
            totalLootValue += parseInt(items[i].value);
        }

        // updates all html text
        document.getElementById("total").innerHTML = totalLootValue;
        document.getElementById("loot").innerHTML = lootText;
    }  

    document.getElementById("warning").innerHTML = warningText;
}

/*

Reflection:

I observed the loot array consist of nothing prior to the loot item being added.
Then when I clicked the "Add Item" button, line 29 uses the array method called "push" to adjoin the new loot item
into the items array. Soon thereafter, I noticed that line 35 used a for loop to cycle through all the items in the array,
thus appending it to a string. Subsequently, that string then was used on line 47 to update the innerHTML of the "loot" text
to reflect the newly added loot item. Then the screen updated and I witnessed it appear.

*/