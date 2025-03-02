// File: js/view/note-editor-view.js - Handles the note editor area

class NoteEditorView {
    constructor(titleElement, contentElement, optionsButtonElement) {
        this.titleElement = titleElement;
        this.contentElement = contentElement;
        this.optionsButtonElement = optionsButtonElement;
    }

    renderActiveNote(note) {
        if (note) {
            this.titleElement.value = note.title || '';
            this.contentElement.value = note.content || '';

            // Enable edit controls
            this.titleElement.disabled = false;
            this.contentElement.disabled = false;
            this.optionsButtonElement.disabled = false;

            // Make sure options button is visible
            this.optionsButtonElement.style.visibility = 'visible';
        } else {
            this.titleElement.value = '';
            this.contentElement.value = '';

            // Disable edit controls when no note is selected
            this.titleElement.disabled = true;
            this.contentElement.disabled = true;
            this.optionsButtonElement.disabled = true;

            // Hide options button
            this.optionsButtonElement.style.visibility = 'hidden';
        }
    }
}

export default NoteEditorView;