import { useState } from 'react';
import Loading from './Loading';

function UserWord({ storedWord, isWordPending, onUpdateWord, onDeleteWord }) {

    const [word, setWord] = useState('');

    // Using 'onSubmit' to get both submit via button-click and by "enter"
    function updateWord(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Don't allow blank word to try update
        if(word) {
            onUpdateWord(word);
            setWord(''); // Clear the word after updating
        }
    }

    return (
        <div className="word">
            <div className="stored-word">
                { isWordPending && <Loading className="word-loading" size='small'>Loading Word...</Loading> }
                { !isWordPending && 
                    <>
                        <span>Stored word:</span>
                        {!storedWord && <span className="no-data">No word, please update your word.</span>}
                        {storedWord && 
                            <div className="stored-word-item">
                                <span className="stored-word-content">{storedWord}</span>
                                <button 
                                    type="button"
                                    className="word-to-delete"
                                    onClick={ (e) => {
                                        onDeleteWord();
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        }
                    </>
                }
            </div>
            <form className="word-form" method="post" onSubmit={updateWord}>
                <label className="word-label">
                <span>Your Word:</span>
                <input
                    className="word-to-send"
                    placeholder="Enter your word"
                    value={word}
                    onInput={(e) => setWord(e.target.value)}
                />
                </label>
                <button 
                    type="submit" 
                    className="word-to-submit" 
                    disabled={!word}
                >
                    Save
                </button>
            </form>
        </div>
    );
}

export default UserWord;