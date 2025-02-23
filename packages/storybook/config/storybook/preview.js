/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import setupContext from '../../context';
import jetPieThemeDocs from './jetPieThemeDocs';
import './scss-loader.scss';

setupContext();

Vue.config.devtools = true;

export const parameters = {
    docs: {
        theme: jetPieThemeDocs
    },
    options: {
        storySort: {
            order: ['Documentation',
                [
                    'Getting Started',
                    [
                        'Intro',
                        'Structure',
                        'Development Principles',
                        'Contributing',
                        'Troubleshooting'
                    ],
                    'Standards',
                    [
                        'Accessibility',
                        [
                            'Overview',
                            'Checklist'
                        ],
                        'Testing',
                        [
                            'Test Level Overview'
                        ]
                    ],
                    'Capabilities',
                    [
                        'Overview'
                    ],
                    'Guides',
                    [
                        [
                            'Component Dependencies',
                            'Typography'
                        ]
                    ]
                ],
                'Components']
        }
    }
};
