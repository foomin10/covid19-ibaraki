<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-table
      :title="$t('陽性患者の属性')"
      :title-id="'attributes-of-confirmed-cases'"
      :chart-data="patientsTable"
      :chart-option="{}"
      :date="Data.patients.date"
      :info="sumInfoOfPatients"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/hassei.html'"
      :source="$t('県公式サイトで見る')"
      :custom-sort="customSort"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    DataTable,
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    // 感染者数
    const patientsTable = formatTable(Data.patients.data)
    // 日付
    const date = patientsGraph[patientsGraph.length - 1].label

    const sumInfoOfPatients = {
      lText: patientsGraph[
        patientsGraph.length - 1
      ].cumulative.toLocaleString(),
      sText: this.$t('{date}の累計', { date }),
      unit: this.$t('人'),
    }

    // 陽性患者の属性 ヘッダー翻訳
    for (const header of patientsTable.headers) {
      switch (header.value) {
        case 'num':
          header.text = this.$t('整理番号')
          break
        default:
          header.text = this.$t(header.value)
      }
    }
    // 陽性患者の属性 中身の翻訳
    for (const row of patientsTable.datasets) {
      row['居住地'] = this.getTranslatedWording(row['居住地'])
      row['性別'] = this.getTranslatedWording(row['性別'])

      if (row['年代'].substr(-1, 1) === '代') {
        const age = row['年代'].substring(0, 2)
        row['年代'] = this.$t('{age}代', { age })
      } else if (row['年代'].substr(-1, 1) === '歳') {
        const age = String(Number(row['年代'].substring(0, 2))) // 0歳対策
        row['年代'] = this.$t('{age}歳', { age })
      } else if (row['年代'] === '不明') {
        row['年代'] = this.$t('不明')
      } else {
        row['年代'] = this.$t(row['年代'])
      }
    }

    return {
      Data,
      patientsTable,
      sumInfoOfPatients,
    }
  },
  methods: {
    getTranslatedWording(value) {
      if (value === '-' || value === '‐' || value === '―' || value == null) {
        // 翻訳しようとしている文字列が以下のいずれかだった場合、翻訳しない
        // - 全角のハイフン
        // - 半角のハイフン
        // - 全角のダッシュ
        // - null
        return value
      }

      return this.$t(value)
    },
    sortBy(list, iteratee) {
      return list.map((value, index) => {
        return {
          value,
          index,
          criteria: iteratee(value, index, list),
        }
      }).sort((left, right) => {
        if (left.criteria === right.criteria) {
          return left.index - right.index
        } else if (left.criteria > right.criteria) {
          return 1
        } else {
          return -1
        }
      }).map(({ value }) =>{
        return value
      })
    },
    customSort(items, index, isDesc) {
      const label = index[0]
      const lt10 = this.$t('10歳未満').toString()
      const gt99 = this.$t('100歳以上').toString()
      const unknown = this.$t('不明').toString()
      const investigating = this.$t('調査中').toString()
      this.sortBy(items, (row, index) => {
        let value = row[label]
        let criteria = value

        if (label === '整理番号') {
          criteria = Number(criteria)
        } else if (label === '公表日') {
          criteria = Number(new Date(`2020/${criteria}`))
        }
        //} else if (label === '居住地') {
        } else if (label === '年代') {
          if (row[label] === lt10) {
            criteria = '00'
          } else if (row[label] === gt99) {
            criteria = '99'
          }
        }
        //} else if (label === '性別') {
        //} else if (label === '濃厚接触者') {
        }

        if (value === investigating && typeof criteria === 'number') {
          criteria = Number.MAX_SAFE_INTEGER - 1
        } else if (value === unknown && typeof criteria === 'number') {
          criteria = Number.MAX_SAFE_INTEGER
        }
        if (typeof criteria === 'number') {
          if (value === investigating) {
            criteria = Number.MAX_SAFE_INTEGER - 1
          } else if (criteria === unknown) {
            criteria = Number.MAX_SAFE_INTEGER
          }
        } else if (typeof criteria === 'string') {
          if (value === investigating) {
            criteria = `1${criteria}`
          } else if (value === unknown) {
            criteria = `2${criteria}`
          } else {
            criteria = `0${criteria}`
          }
        }

        return criteria
      })
      if (isDesc[0]) {
        items.reverse()
      }
      return items
    },
  },
}
</script>
