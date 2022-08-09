'use babel';

import SlotJudiTerpercayaView from './slot-judi-terpercaya-view';
import { CompositeDisposable } from 'atom';

export default {

  slotJudiTerpercayaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.slotJudiTerpercayaView = new SlotJudiTerpercayaView(state.slotJudiTerpercayaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.slotJudiTerpercayaView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'slot-judi-terpercaya:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.slotJudiTerpercayaView.destroy();
  },

  serialize() {
    return {
      slotJudiTerpercayaViewState: this.slotJudiTerpercayaView.serialize()
    };
  },

  toggle() {
    console.log('SlotJudiTerpercaya was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
