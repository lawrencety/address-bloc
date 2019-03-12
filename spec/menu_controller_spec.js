const MenuController = require('../controllers/MenuController.js');

describe('MenuController', () => {

  beforeEach(() => {
    this.menu = new MenuController();
  })

  describe('#getContactCount()', () => {

    it('Should return 0 when no contacts are in the book', () => {
      expect(this.menu.getContactCount()).toBe(0);
    });

    it('Should return 1 when one contact is in the book', () => {
      this.menu.contacts.push('Bob');
      expect(this.menu.getContactCount()).toBe(1);
    })

  });

  describe('#reminder()', () => {

    it('Should remind you about learning',() => {
      expect(this.menu.remindMe()).toBe('Learning is a life-long pursuit');
    })

  })
})
