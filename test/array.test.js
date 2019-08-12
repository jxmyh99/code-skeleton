/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 11:45:58
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-12 11:52:03
 * @Description: 
 */
describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`wlutls.arrayEqual([0, 2, 3, 4], [1, 2, 3]) should return false`, function () {
            assert.notEqual(wlutls.arrayEqual([0, 2, 3, 4], [1, 2, 3]), true)
        });
        it(`wlutls.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(wlutls.arrayEqual([0, 2, 3], [1, 2, 3]), true)
        });
        it('wlutls.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(wlutls.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        const arr = [8, 2, 3, 4, 7, 8]
        it(`wlutls.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(wlutls.arrayEqual(arr, arr))
        });
    });
});