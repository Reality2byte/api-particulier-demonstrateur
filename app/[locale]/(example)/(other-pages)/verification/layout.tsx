'use client';

import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import { useTranslations } from 'next-intl';
import CardSocialPricing from '@/components/CardSocialPricing';

export default function Layout({ children }: { children: JSX.Element }) {
  const t = useTranslations('Succes-verification');

  return (
    <div
      className={'fr-container'}
      style={{
        ...fr.spacing('padding', {
          top: '15v',
          bottom: '15v',
        }),
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ width: '65%' }}>
        <Stepper currentStep={3} nextTitle={t('stepperNextTitle')} stepCount={4} title={t('stepperTitle')} />
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '65%' }}>{children}</div>

        <div style={{ flex: '35%', paddingLeft: '60px' }}>
          <CardSocialPricing />
        </div>
      </div>
    </div>
  );
}
