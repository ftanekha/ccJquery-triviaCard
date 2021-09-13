$(document).ready(
    ()=>{
        //start with the hint box
        $('.hint-box').on('click', () => {
            //show hint
            $('.hint').slideToggle('slow', 'swing', () => console.info('showing hint!'))
        })

        //identify wrong answers
        const $wrongAnswers = ['.wrong-answer-one', '.wrong-answer-two', '.wrong-answer-three']
        //animate wrong answers on click
        for(let $wrongAnswer of $wrongAnswers){
            $($wrongAnswer).on('click', () => {
                //disappear smiley face (just in case)
                $('.smiley').hide()
                //
                $(`${$wrongAnswer} .answer-text`).fadeOut('fast', 'linear', ()=> console.info('incrorrect answer detected!'))
                //show frown image
                $('.frown').show()
            })
        }

        //animate correct answer
        $('.correct-answer').on('click', () => {
            //disappear incorrect answers
            for(let $wrongAnswer of $wrongAnswers){
                $($wrongAnswer).slideUp()
            }
            //disappear frown image
            $('.frown').hide()
            //show smiley face
            $('.smiley').fadeIn('fast', 'linear', () => console.info('correct answers selected!!'))
        })

        //reset card
        $('.reset').on('click', () => {
            for(let $wrongAnswer of $wrongAnswers){
                $(`${$wrongAnswer} .answer-text`).show()
                $($wrongAnswer).slideDown()
            }
            $('.smiley').hide()
            $('.frown').hide()
        })
    }
)