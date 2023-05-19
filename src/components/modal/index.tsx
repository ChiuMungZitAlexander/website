import { Fragment } from 'react'
import cx from 'classix'
import { Dialog, Transition } from '@headlessui/react'

type ModalProps = {
  open: boolean
  setOpen: (open: boolean) => void
  children: JSX.Element | JSX.Element[]
  maskClassName?: string
}

export const Modal = ({ open, setOpen, children, maskClassName }: ModalProps) => (
  <Transition
    appear
    as={Fragment}
    show={open}
  >
    <Dialog
      as="div"
      className="relative z-10"
      onClose={() => setOpen(false)}
    >
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className={cx('fixed inset-0 bg-black bg-opacity-50', maskClassName)} />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {children}
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
)
