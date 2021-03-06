import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import RendezVousForm from "../components/RendezVous";



export default function RendezVous() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
            <main>
                <RendezVousForm/>
            </main>
        </Layout>
    );
}
