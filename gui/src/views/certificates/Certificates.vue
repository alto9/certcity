<template>
  <div>
    <ARow>
      <ACol lg="12">
        <ATableWrapper :items="certificates" :fields="fields" :itemsperpage="100" :small="true">
          <template #header>
            <CIcon name="cil-grid"/> All Certificates
          </template>
        </ATableWrapper>
      </ACol>
    </ARow>
  </div>
</template>

<script>
import ATableWrapper from '../../components/Table.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  created() {
    console.log('Certificates Component has been created')
  },
  mounted() {
    console.log('Certificates Component has been mounted')
    this.getCertificates()
  },
  data() {
    return {
      certificates: [],
      fields: ['ARN', 'Domain Name', 'Issued At', 'Sync', 'Status', 'Renewal Eligibility']
    }
  },
  name: 'Certificates',
  components: { ATableWrapper },
  methods: {
    async getCertificates() {

      const certConfig = {
        method: 'get',
        url: 'http://localhost:5000/api/certificates/?page=1&page_size=1000'
      }
      const response = await axios(certConfig);
 
      for(var cert in response.data.page){
        let res = response.data.page[cert]

        this.certificates.push({
          "ARN": res.attributes.CertificateArn,
          "Domain Name": res.attributes.DomainName,
          "Issued At": res.attributes.IssuedAt,
          "Sync": res.status,
          "Status": res.attributes.Status,
          "Renewal Eligibility": res.attributes.RenewalEligibility
        })
      }
    }

  }
}
</script>