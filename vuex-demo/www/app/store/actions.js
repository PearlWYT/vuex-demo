export default {
    //这里先复现一下同步的：
    add : ({commit} , a) => commit("add" , a),
    minus : ({commit}) => commit("minus"),
    //下面是异步的：
    addIfOdd({ commit, state }) {
        if (state.a % 2 === 1) {
            commit('add' , 1)
        }
    }
}