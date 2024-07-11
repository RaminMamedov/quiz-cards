import { ReactNode, useState } from 'react'

import s from './Dialog.module.scss'
import { ModalWindow } from '@/components/ui/ModalWindow'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'

type ActionDialog = 'removeDeck' | 'removeCard'

export type DialogProps = {
  trigger: ReactNode
  modalHeaderTitle: string
  itemName: string
  action: ActionDialog
  buttonTitle: string
  onClick: () => void
}

export const Dialog = ({
  trigger,
  modalHeaderTitle,
  action,
  itemName,
  buttonTitle,
  onClick,
}: DialogProps): JSX.Element => {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }

  const onButtonClickHandler = () => {
    onClick()
    setOpen(false)
  }

  return (
    <ModalWindow trigger={trigger} open={open} setOpen={setOpen} title={modalHeaderTitle}>
      <div className={s.root}>
        <Typography className={s.text} variant={'body1'}>
          {getDialogText(action, itemName)}
        </Typography>
        <div className={s.buttonContainer}>
          <Button type="button" variant={'secondary'} onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onButtonClickHandler}>{buttonTitle}</Button>
        </div>
      </div>
    </ModalWindow>
  )
}

const getDialogText = (action: ActionDialog, itemName?: string) => {
  const dialogVariants: {
    [key in ActionDialog]: ReactNode
  } = {
    removeDeck: (
      <>
        Do you really want to remove <b>{itemName}?</b> <br></br> All cards will be deleted.
      </>
    ),
    removeCard: (
      <>
        Do you really want to remove this card from deck. <br></br>Card will be deleted.
      </>
    ),
  }

  return dialogVariants[action]
}
