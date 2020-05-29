/*
 * @Author: fanjing
 * @Date: 2020-05-08 14:14:19
 * @LastEditors: fanjing
 * @LastEditTime: 2020-05-25 14:19:32
 * @Description:
 */

export default {
  getComments() {
    return ['comment1', 'comment2', 'comment3']
  },
  getBlogPost() {
    return 'BlogPost Contents'
  },
  addChangeListener(callback) {
    callback && callback();
    // console.log('addChangeListener')
  },
  removeChangeListener() {
    console.log('removeChangeListener')
  },
}
