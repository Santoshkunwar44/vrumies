import { Link, useParams } from 'react-router-dom'
import styles from '../../pages/profile/profile.module.css'
import { useSelector } from 'react-redux'

const ProfileSidebar = ({currentUser, nameRef,newInputRef,editableDivRef, imageRef, editMode,nameEdit, setNameEdit, setProfileFile,handleUpdateUser,setEditMode}) => {


    const {userId} =useParams()

    const {userData} =useSelector(state=>state.userReducer)

  return (
    <div className={styles.profileInfoLeft}>
    <img className={styles.profileMark} src="/images/profilemark.png" alt="profileMark" />
    <div className={styles.profileMainInfo}>
        <div onClick={() => imageRef.current.click()} className={styles.imageWrapper}>
            <img referrerPolicy="no-referrer" className={styles.profileImage} src={currentUser?.profileImg} alt="profileImage" />
            <div className={styles.imageBg}>
                <img className={styles.cameraImg} src="/images/profileCamera.png" alt="profileCamera" />
                <input multiple style={{ display: "none" }} onChange={(e) => setProfileFile([e.target.files[0]])} type="file" name="profileImg" id="" ref={imageRef} />

            </div>
        </div>

        <div className={styles.profileNameInfo}>


            <p ref={nameRef} contentEditable={nameEdit} className={styles.profileUsername}> {currentUser?.username} </p>
            <p className={styles.profileEmail}>{currentUser?.email}</p>

        </div>

        {
            nameEdit ? <img alt='doneImg' className={styles.pencilEdit} onClick={() => handleUpdateUser()} src="https://img.icons8.com/emoji/48/null/check-mark-emoji.png" /> : <img onClick={() => setNameEdit(true)} className={styles.pencilEdit} src="/images/pencil.png" alt="pencilEdit" />
        }

    </div>
    {
        userId !== userData?._id  && 
    <Link    to={`/chat/user/${userId}`} className={styles.messageUserBox}>
            <p>Message User </p>
            <img src="/icons/mail.png" alt="mailIcon" />
    </Link>
    }
    <div className={styles.profileUserDescription}>
        <div className={styles.profileDescHeader}>

            <p className={styles.aboutText}>About Me</p>
            {
                editMode ? <p onClick={() => handleUpdateUser()} className={styles.editText}>Save</p> :
                    <p onClick={() => setEditMode(true)} className={styles.editText}>Edit</p>

            }
        </div>

        <div className={styles.profileAboutText}>
            {
                currentUser?.about ? editMode ? <div contentEditable ref={editableDivRef} > {currentUser?.about} </div> : currentUser?.about : editMode ? <textarea ref={newInputRef} rows={"10"} className={styles.editInput} placeholder='start typing...' ></textarea> : <span className={styles.typeText}>Type about  yourself here...</span>
            }
        </div>

    </div>

</div>
  )
}

export default ProfileSidebar