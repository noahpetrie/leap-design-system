import React, { useState, useRef } from 'react';
import LeapButton from '../LeapButton/LeapButton.jsx';
import LeapInput from '../LeapInput/LeapInput.jsx';
import LeapDialog, {
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogSubtitle,
  DialogControls,
  DialogCloseButton,
} from './LeapDialog.jsx';

export default {
  title: 'Components/LeapDialog',
  component: LeapDialog,
  tags: ['autodocs'],
  argTypes: {
    modal: { control: 'boolean' },
    open: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          `A lightweight dialog built on the native HTML \`<dialog>\` element, supporting both modal and non-modal modes. Use \`modal\` for blocking interactions (confirmations, destructive actions) and non-modal for supplementary info that doesn't interrupt workflow. Compose with \`DialogHeader\`, \`DialogBody\`, \`DialogFooter\`, \`DialogTitle\`, \`DialogSubtitle\`, \`DialogControls\`, and \`DialogCloseButton\` sub-components.

### Import
\`\`\`jsx
import { LeapDialog } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``,
      },
    },
  },
};

export const Modal = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <>
      <LeapButton ref={buttonRef} onClick={() => setOpen(true)}>
        Open modal dialog
      </LeapButton>
      <LeapDialog
        modal
        open={open}
        onRequestClose={() => setOpen(false)}
        onClose={() => setOpen(false)}
        focusAfterCloseRef={buttonRef}
      >
        <DialogHeader>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogSubtitle>Review before continuing</DialogSubtitle>
          <DialogControls>
            <DialogCloseButton onClick={() => setOpen(false)} />
          </DialogControls>
        </DialogHeader>
        <DialogBody>
          <p style={{ marginBottom: '1rem' }}>
            Are you sure you want to proceed with this action? This will apply
            the changes to the selected items.
          </p>
          <LeapInput id="dialog-input" label="Confirmation note" placeholder="Optional note..." />
        </DialogBody>
        <DialogFooter
          primaryButtonText="Confirm"
          secondaryButtonText="Cancel"
          onRequestSubmit={() => setOpen(false)}
          onRequestClose={() => setOpen(false)}
        />
      </LeapDialog>
    </>
  );
};

export const NonModal = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <>
      <LeapButton ref={buttonRef} onClick={() => setOpen(!open)}>
        Toggle non-modal dialog
      </LeapButton>
      <LeapDialog
        open={open}
        onClose={() => setOpen(false)}
        focusAfterCloseRef={buttonRef}
        aria-label="Information dialog"
      >
        <DialogHeader>
          <DialogTitle>Quick info</DialogTitle>
          <DialogControls>
            <DialogCloseButton onClick={() => setOpen(false)} />
          </DialogControls>
        </DialogHeader>
        <DialogBody>
          <p>This is a non-modal dialog. You can still interact with the page behind it.</p>
        </DialogBody>
      </LeapDialog>
    </>
  );
};

export const Danger = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <>
      <LeapButton kind="danger" ref={buttonRef} onClick={() => setOpen(true)}>
        Delete item
      </LeapButton>
      <LeapDialog
        modal
        open={open}
        onRequestClose={() => setOpen(false)}
        onClose={() => setOpen(false)}
        focusAfterCloseRef={buttonRef}
      >
        <DialogHeader>
          <DialogTitle>Delete item?</DialogTitle>
          <DialogSubtitle>This action cannot be undone</DialogSubtitle>
          <DialogControls>
            <DialogCloseButton onClick={() => setOpen(false)} />
          </DialogControls>
        </DialogHeader>
        <DialogBody>
          <p>Permanently delete this item and all associated data?</p>
        </DialogBody>
        <DialogFooter
          danger
          primaryButtonText="Delete"
          secondaryButtonText="Cancel"
          onRequestSubmit={() => setOpen(false)}
          onRequestClose={() => setOpen(false)}
        />
      </LeapDialog>
    </>
  );
};
