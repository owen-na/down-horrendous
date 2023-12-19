import styles from "./question.module.css"


function buttonManipulation(value: number) {
    switch (value) {
        case 1:
            return (
                <>
                </>
            )
            break;
        case 2:
            return (
                <>
                </>
            )
            break;
        case 3: 
            return (
                <>
                </>
            )
            break;
        default:
            break;
    }
}

// will need a fucntion that can take an int parammeter (1, 2, 3) and based on that, do a specific thing with the buttons!
export default function Question(mainipulator: number) {
    return (
        <div className={styles.mainbox}>
            {/* <Image>

            </Image> */}
            <p>Are you currently single?</p>
            <div className={styles.buttonOptions}>
                <button>yes!</button>
                {buttonManipulation(mainipulator)}
                <button>no</button> {/* fades out button and replaces with text into being well now you are leaving only the yes button */}
            </div>
        </div>
    )
}