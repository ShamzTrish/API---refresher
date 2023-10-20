
export interface ModalProps {
    setModalOpen: (open: boolean) => boolean | void
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ setModalOpen, children }) => {

    return (
        <div className='fixed inset-0 flex items-center justify-center'>
            <div className="modal-box bg-slate-700">

                <form method="dialog" className='flex-col'>
                    {/* if there is a button in the form, it will close the modal */}
                </form>
                {children}
            </div>
        </div>
    )
}

export default Modal
