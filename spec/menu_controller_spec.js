const MenuController = require('../controllers/MenuController.js');

describe('MenuController', () => {
  describe('#getContactCount()', () => {

    beforeEach(() => {
      this.menu = new MenuController();
    })

    it('Should return 0 when no contacts are in the book', () => {
      expect(this.menu.getContactCount()).toBe(0);
    });

    it('Should return 1 when one contact is in the book', () => {
      this.menu.contacts.push('Bob');
      expect(this.menu.getContactCount()).toBe(1);
    })

  })
})
