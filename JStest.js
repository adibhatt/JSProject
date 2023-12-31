/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _age, _country, _net_worth) {
    const richest = {
        "Name" : _name,
        "Age": _age,
        "Country": _country,
        "Net_worth" : _net_worth,
    };
    NFTs.unshift(richest);
    console.log("You have sucessfully added : " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for( let i=NFTs.length-1; i>=0; i--)
    {
        console.log("\nRank \t: " +  ((NFTs.length)-i));
        console.log("Name \t: " + NFTs[i].Name);
        console.log("Age \t: " + NFTs[i].Age);
        console.log("Country\t: " + NFTs[i].Country);
        console.log("Worth \t: " + NFTs[i].Net_worth);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nThe total number of entries = " + NFTs.length);

}

// call your functions below this line
mintNFT("Elon Musk", 45, "USA", "$ 234.7B");
mintNFT("Bernard Arnault & family", 78, "France", "$ 228.8B");
mintNFT("Jeff Bezos", 56, "USA", "$ 153.0B");
mintNFT("Larry Ellison", 80, "USA", "$ 149.2B");
mintNFT("Bill Gates", 78, "USA", "$ 119.3B");
listNFTs();
getTotalSupply();

