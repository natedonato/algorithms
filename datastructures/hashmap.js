// this is my javascript implementation of a hash / dictionary.
// Hash table big O numbers:
//  Space   O(n) average, O(n) worst
//  Search  O(1) average, O(n) worst
//  Insert  O(1) average, O(n) worst
//  Delete  O(1) average, O(n) worst



// now I am making a quick linked list
class Node {
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(node){
        this.head = node;
        this.count = 0;
    };
}




//Gonna come back to this after doing my linked list
class Hashtable {
    constructor(size){
        this.size = size || 4;
        this.buckets = Array(this.size);
        this.count = 0;
    };

    //Starting with an example Hashing function (not a great one).  This one takes in a string and returns an integer moded by a given size, the amount of buckets in our hash.  There will be collisions but that is ok they will be handled.

    hash(key){
        let hashedKey = 0;
        
        for(let i = 0; i < key.length; i++){
          hashedKey += key.charCodeAt(i);
        }
      
        return hashedKey % this.size;
    }

    print(){
        console.log(this.buckets);
        console.log("count: "+ this.count);
        console.log("size " + this.size);
    }

    put(key, value){
        let bucketIndex = this.hash(key);
        let currentBucket = this.buckets[bucketIndex]
        let newItem = new Node(key, value);

        // make a new list if the bucket is null / empty
        if(!currentBucket){
            currentBucket = new LinkedList(newItem)
            currentBucket.count++;
            this.count++;

            return value;
        }else{
            //if theres just one thing we either update they key/value pair or add our new node to the list
            if(!currentBucket.next){
                if(currentBucket.key === key){
                    currentBucket.value = value;
                }
                else{
                    currentBucket.next = newItem;
                    currentBucket.count++;
                    this.count++;
                }
            }

            //if there is already a list we have to check if it contains the key or not to see if we update or add

            while(currentBucket.next){
                
                //if we find our key just update the value and we're set
                if(currentBucket.key === key){
                    currentBucket.value = value;
                    return value;
                }
                currentBucket = currentBucket.next;
            }

            if(currentBucket.key === key){
                currentBucket.value = value;
                return value;
            }else{
                currentBucket.next = newItem;
                currentBucket.count++;
                this.count++;
                return value;
            }
        }
    }





}
