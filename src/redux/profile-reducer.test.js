import profileReducer, {addPost} from "./profile-reducer";


let state = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 7}
    ],
    profile: null,
    status: ''
}

test('length of post should be incremented', () => {
   // 1. test data
    let action = addPost('test post text')
    // 2. action
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(3);
    expect(newState.postData[2].message).toBe('test post text');
});
test('message of new post should be correct', () => {
    // 1. test data
    let action = addPost('test post text')
    // 2. action
    let newState = profileReducer(state, action)
    expect(newState.postData[2].message).toBe('test post text');
});


