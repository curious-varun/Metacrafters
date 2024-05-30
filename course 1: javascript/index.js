/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, owner) {
  // Create an NFT object with metadata
  const nft = {
    name: name,
    description: description,
    owner: owner
  };

  // Add the NFT to the collection
  nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  // Loop through the nftCollection array and print each NFT's metadata
  for (let i = 0; i < nftCollection.length; i++) {
    console.log(`Name: ${nftCollection[i].name}`);
    console.log(`Description: ${nftCollection[i].description}`);
    console.log(`Owner: ${nftCollection[i].owner}`);
    console.log('---');
  }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions below this line

// Mint some NFTs
mintNFT('CryptoKitty', 'A cute crypto kitty', 'Alice');
mintNFT('CryptoPunk', 'A unique punk', 'Bob');
mintNFT('DigiDragon', 'A digital dragon', 'Charlie');

// List all NFTs
listNFTs();

// Print the total supply of NFTs
console.log(`Total Supply: ${getTotalSupply()}`);


