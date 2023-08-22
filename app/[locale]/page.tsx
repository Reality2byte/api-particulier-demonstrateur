'use client';

import common from './(guide)/common.module.css';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import Tooltip from '@/components/Tooltip';
import { useTranslations } from 'next-intl';
import Banner from '@/components/Banner';
import { useJourney } from '@/app/journey-provider';
import { Journey } from '@/app/types';

export default function Index() {
  const t = useTranslations('UsageAndUser');
  const { setJourney } = useJourney();

  const handleCardClick = (data: Journey) => {
    setJourney(data);
  };

  return (
    <div className={common.container}>
      <Banner />
      <main className={common.main}>
        <h1 className={`fr-h2 ${common.title}`}>{t('title')}</h1>
        <h2 className={`fr-h1 ${common.subtitle}`}>{t('titleUsage')} </h2>
        <div className={common.cards}>
          <div
            role="button"
            onClick={() =>
              handleCardClick({
                type: 'transport',
              })
            }
          >
            <Card
              className={common.card}
              start={
                <ul className="fr-tags-group">
                  <li>
                    <Tag small>{t('tags.socialPricing')}</Tag>
                  </li>
                </ul>
              }
              desc={t('cards.transport.desc')}
              enlargeLink
              linkProps={{
                href: '/choix-personnage?usage=1',
              }}
              title={t('cards.transport.title')}
            />
          </div>
          <div
            role="button"
            onClick={() =>
              handleCardClick({
                type: 'canteen',
              })
            }
          >
            <Card
              className={common.card}
              start={
                <ul className="fr-tags-group">
                  <li>
                    <Tag small>{t('tags.solidarityPricing')}</Tag>
                  </li>
                </ul>
              }
              desc={t('cards.canteen.desc')}
              enlargeLink
              linkProps={{
                href: '/choix-personnage?usage=2',
              }}
              title={t('cards.canteen.title')}
            />
          </div>
        </div>
      </main>
      <Tooltip disabledActions={{ back: true, home: true }} isOpenedByDefault={false}></Tooltip>
    </div>
  );
}
