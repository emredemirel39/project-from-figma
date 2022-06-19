// packages
import React, { useState } from 'react'

//components
import IconBox from '../IconBox';

//styles
import styles from './ContactForm.module.scss';

//images
import contactFormImage from '../../assets/images/contact-form-image.png';

// types
import { IFormState } from '../../types';

const ContactForm = () => {

    const initialState: IFormState = {
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
    };

    const [ form, setForm ] = useState <IFormState> (initialState);
    const [ isFormSent, setIsFormSent ] = useState <boolean> (false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const israeliPhoneNumRegExp: RegExp = /^0(?:[234689]|5[0-689]|7[246789])(?![01])(\d{7})$/g;
        const isPhoneNumValid: boolean = form.phoneNumber.match(israeliPhoneNumRegExp) !== null;
        // example of phone number: 0547475720

        const emailvalidationRegExp: RegExp = /\S+@\S+\.\S+/;
        const isEmailValid: boolean = form.email.match(emailvalidationRegExp) !== null;        
        
        isEmailValid && isPhoneNumValid 
        ? postMessages()
        : window.alert('Form not correct!');
    }

    const autoGrow = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        e.currentTarget.style.height = "11px";
        e.currentTarget.style.height = (e.currentTarget.scrollHeight)+"px";
    }

    const postMessages = async () => {

        const messageBox = 'http://localhost:3004/messages';

        try {
            const request = await fetch(messageBox, {

                method: 'POST',
                headers:{ "Content-Type": "application/json"},
                body: JSON.stringify(form)
            });

            //const response = await request.json();
            //console.log(response);

            setIsFormSent(true);
            
            
        } catch (error) {
            window.alert('Error while sending data');
        }
    };

  return (
    <React.Fragment>
        {
            // contact form template after submit

            isFormSent
            ? (
                <div className={styles.sentFormWrapper}>
                    <div className={`${styles.sentFormTitleWrapper} ${styles.titleWrapper} no-mobile`}>
                        <h2>
                            רשקב ונתxיא תויהל בוט יכה
                        </h2>
                        <h4>
                            !ןוכנה םוקמל םתעגה ?עדימ תצק דוע םיכירצ ?תולאש םכל שי
                        </h4>
                        <h4>
                            םיטרפה תא אלמל וא םוזב הרצק החיש ונתיא םאתל ולכות
                        </h4>
                    </div>
                    <div className={`${styles.sentFormImageBoxDesktop} no-mobile`}>
                        <img src={contactFormImage} alt="form-img" />
                        <div></div>
                    </div>
                    <div className={styles.sentFormMessage}>
                        <h4>
                            !הבר הדות
                        </h4>
                        <h4>
                            החלצהב ולבקתה םכלש םיטרפה
                        </h4>
                        <h4>
                            !בורקב רשקב היהנ
                        </h4>
                    </div>
                    <div className={`${styles.sentFormImageBox} no-desktop`}>
                        <img src={contactFormImage} alt="form-img" />
                        <div></div>
                    </div>
                    <div className={`${styles.sentFormSocialIcons} no-desktop`}>
                        <IconBox/>
                    </div>
                </div>
            )

                // Contact form template before submit

            : (
                <div className={styles.contactFormWrapper}>
        <div className={styles.titleWrapper}>
            <h2>
                רשקב ונתיא תויהל בוט יכה
            </h2>
            <h4>
                !ןוכנה םוקמל םתעגה ?עדימ תצק דוע םיכירצ ?תולאש םכל שי
            </h4>
            <h4>
                םיטרפה תא אלמל וא םוזב הרצק החיש ונתיא םאתל ולכות
            </h4>
        </div>
        <div className={`${styles.imageBox} no-mobile`}>
            <img src={contactFormImage} alt="form-img" />
            <div></div>
        </div>

        <form onSubmit={e => handleSubmit(e)}>

            <div className={styles.inputBox}>
                <label>איך קוראים לכם?</label>
                <input onChange={e => handleChange(e)} name='fullName' type="text" />
            </div>

            <div className={styles.emailPhoneWrapper}>
                <div className={styles.inputBox}>
                    <label>מייל</label>
                    <input onChange={e => handleChange(e)} name='email' type='text' />
                </div>
                <div className={styles.inputBox}>
                    <label>טלפון</label>
                    <input onChange={e => handleChange(e)} name='phoneNumber' type='text' />
                </div>
            </div>

            <div className={styles.inputBox}>
                <label>רוצים לכתוב לנו משהו?</label>
                <textarea onInput={e => autoGrow(e) } onChange={e => handleChange(e)} name="message"></textarea>
            </div>

            <button>החילש</button>
            <div className={styles.socialIcons}>
                <IconBox/>
            </div>
        </form>
    </div>
            )
        }
    </React.Fragment>
  )
}

export default ContactForm