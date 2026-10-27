import {
    useState
} from "react";


import {
    X,
    ImagePlus
} from "lucide-react";


function CreatePostModal({
    open,
    onClose
}) {

    const [
        preview,
        setPreview
    ] = useState(null);


    const [
        caption,
        setCaption
    ] = useState("");


    if (!open) {
        return null;
    }


    function chooseImage(event) {

        const file =
            event.target.files[0];


        if (!file) {
            return;
        }


        const imageURL =
            URL.createObjectURL(file);


        setPreview(imageURL);
    }


    function submitPost(event) {

        event.preventDefault();


        alert(
            "Your frontend post is ready 🐾"
        );


        setCaption("");

        setPreview(null);

        onClose();
    }


    return (

        <div
            className="modal-backdrop"
            onMouseDown={onClose}
        >

            <form
                className="create-modal"

                onSubmit={
                    submitPost
                }

                onMouseDown={
                    event =>
                        event.stopPropagation()
                }
            >

                <button
                    type="button"
                    className="modal-close"
                    onClick={onClose}
                >

                    <X />

                </button>


                <span
                    className="modal-eyebrow"
                >
                    NEW MEMORY
                </span>


                <h2>
                    Share their world 🐾
                </h2>


                <label
                    className="upload-zone"
                >

                    {
                        preview
                        ?
                        <img
                            src={preview}
                            alt="Post preview"
                        />
                        :
                        <>
                            <ImagePlus
                                size={45}
                            />

                            <strong>
                                Select a pet photo
                            </strong>

                            <span>
                                JPG, PNG or WEBP
                            </span>
                        </>
                    }


                    <input
                        type="file"
                        accept="image/*"
                        hidden

                        onChange={
                            chooseImage
                        }
                    />

                </label>


                <textarea

                    value={
                        caption
                    }

                    onChange={
                        event =>
                            setCaption(
                                event.target.value
                            )
                    }

                    placeholder="What happened in their world today?"
                />


                <button
                    type="submit"
                    className="primary-btn modal-share"
                >
                    Share with Petify
                </button>

            </form>

        </div>

    );
}


export default CreatePostModal;