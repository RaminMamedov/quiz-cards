import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'
import * as ModalPrimitive from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { modalAnimations } from '@/components/ui/ModalWindow/modalWindowAnimations'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'
import s from './ModalWindow.module.scss'
import CloseOutline from '@/assets/icons/CloseOutline'

export type ModalWindowProps = {
  trigger: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  title: string
} & ComponentPropsWithoutRef<'div'>

export const ModalWindow = forwardRef<ElementRef<'div'>, ModalWindowProps>(
  ({ trigger, open, setOpen, title, className, children, ...restProps }, ref): JSX.Element => {
    const classNames = {
      closeButton: s.closeButton,
      content: clsx(s.content, className),
      overlay: s.overlay,
      header: s.header,
    }
    return (
      <ModalPrimitive.Root open={open} onOpenChange={setOpen}>
        <ModalPrimitive.Trigger asChild>{trigger}</ModalPrimitive.Trigger>
        <AnimatePresence>
          {open && (
            <ModalPrimitive.Portal forceMount>
              <motion.div {...modalAnimations.overlay}>
                <ModalPrimitive.Overlay className={classNames.overlay} forceMount />
              </motion.div>
              <div ref={ref} className={classNames.content} {...restProps}>
                <ModalPrimitive.Content asChild forceMount>
                  <motion.div {...modalAnimations.window}>
                    <Card>
                      <header className={classNames.header}>
                        <Typography as="h2" variant={'h2'}>
                          {title}
                        </Typography>
                        <ModalPrimitive.Close asChild className={classNames.closeButton}>
                          <CloseOutline />
                        </ModalPrimitive.Close>
                      </header>
                      <div>{children}</div>
                    </Card>
                  </motion.div>
                </ModalPrimitive.Content>
              </div>
            </ModalPrimitive.Portal>
          )}
        </AnimatePresence>
      </ModalPrimitive.Root>
    )
  }
)
