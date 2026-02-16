import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface DeletionConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type DeletionTarget =
  | 'services-pricing'
  | 'services-cta'
  | 'service-card'
  | 'contact-submission'
  | 'network-application'
  | 'page-route'
  | '';

export function DeletionConfirmationDialog({
  open,
  onOpenChange,
}: DeletionConfirmationDialogProps) {
  const [selectedTarget, setSelectedTarget] = useState<DeletionTarget>('');
  const [confirmed, setConfirmed] = useState(false);

  const deletionTargets = [
    {
      value: 'services-pricing' as DeletionTarget,
      label: 'Services Pricing Section',
      description: 'Remove the pricing breakdown from the Services page',
    },
    {
      value: 'services-cta' as DeletionTarget,
      label: 'Services CTA Block',
      description: 'Remove the call-to-action buttons at the bottom of Services page',
    },
    {
      value: 'service-card' as DeletionTarget,
      label: 'Individual Service Card',
      description: 'Remove a specific service offering from the Services page',
    },
    {
      value: 'contact-submission' as DeletionTarget,
      label: 'Contact Form Submission',
      description: 'Delete a stored contact inquiry from the backend',
    },
    {
      value: 'network-application' as DeletionTarget,
      label: 'Network Application',
      description: 'Delete a stored contributor application from the backend',
    },
    {
      value: 'page-route' as DeletionTarget,
      label: 'Entire Page/Route',
      description: 'Remove a complete page and its route from the application',
    },
  ];

  const handleConfirm = () => {
    if (!selectedTarget) return;

    // Show confirmation state
    setConfirmed(true);

    // Reset after showing confirmation
    setTimeout(() => {
      setConfirmed(false);
      setSelectedTarget('');
      onOpenChange(false);
    }, 2500);
  };

  const handleCancel = () => {
    setSelectedTarget('');
    setConfirmed(false);
    onOpenChange(false);
  };

  const handleValueChange = (value: string) => {
    setSelectedTarget(value as DeletionTarget);
  };

  const getTargetLabel = () => {
    const target = deletionTargets.find((t) => t.value === selectedTarget);
    return target?.label || '';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        {!confirmed ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                Clarify Deletion Target
              </DialogTitle>
              <DialogDescription>
                Please select exactly what you want to delete. No deletion will occur until you
                confirm your selection.
              </DialogDescription>
            </DialogHeader>

            <div className="py-6">
              <RadioGroup value={selectedTarget} onValueChange={handleValueChange}>
                <div className="space-y-4">
                  {deletionTargets.map((target) => (
                    <div
                      key={target.value}
                      className="flex items-start space-x-3 rounded border border-border p-4 hover:bg-muted/50 transition-colors"
                    >
                      <RadioGroupItem value={target.value} id={target.value} className="mt-1" />
                      <div className="flex-1">
                        <Label
                          htmlFor={target.value}
                          className="text-base font-medium cursor-pointer"
                        >
                          {target.label}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">{target.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleConfirm}
                disabled={!selectedTarget}
              >
                Confirm Selection
              </Button>
            </DialogFooter>
          </>
        ) : (
          <div className="py-12 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <DialogTitle className="text-xl mb-2">Selection Recorded</DialogTitle>
            <DialogDescription className="text-base">
              You selected: <strong>{getTargetLabel()}</strong>
              <br />
              <br />
              No deletion has been performed. This is a clarification-only interface to prevent
              accidental data loss.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
