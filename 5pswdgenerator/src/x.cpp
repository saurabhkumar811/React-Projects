#include <iostream>
#include <vector>
#include <string>
#include <map>
#include <algorithm> // Include this for upper_bound
using namespace std;

vector<int> findPatchSequence(string patch, string designerWords) {
    map<char, vector<int>> patchIndices;
    int patchLen = patch.length();
    int wordLen = designerWords.length();
    
    // Store the positions of each character in the patch
    for (int i = 0; i < patchLen; i++) {
        patchIndices[patch[i]].push_back(i);
    }
    
    vector<int> result;
    int prevIndex = -1;
    
    for (char ch : designerWords) {
        if (patchIndices.find(ch) == patchIndices.end()) {
            return {-1}; // If any character is not present in the patch, return -1
        }
        
        // Find the next valid index in patch
        auto &indices = patchIndices[ch];
        auto it = upper_bound(indices.begin(), indices.end(), prevIndex);
        
        if (it == indices.end()) {
            // If no valid index is found, restart from the beginning of the patch
            result.push_back(indices[0]);
            prevIndex = indices[0];
        } else {
            result.push_back(*it);
            prevIndex = *it;
        }
    }
    
    return result;
}

int main() {
    string patch, designerWords;
    cin >> patch >> designerWords;
    
    vector<int> sequence = findPatchSequence(patch, designerWords);
    
    for (int i = 0; i < sequence.size(); i++) {
        cout << sequence[i] << " ";
    }
    cout << endl;
    
    return 0;
}
