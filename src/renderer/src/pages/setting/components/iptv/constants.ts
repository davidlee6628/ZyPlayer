import { t } from '@/locales';
import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  { colKey: 'row-select', type: 'multiple', width: 64, fixed: 'left' },
  {
    title: t('pages.setting.table.header.name'),
    colKey: 'name',
    width: 200,
    align: 'left',
    fixed: 'left',
    ellipsis: true,
  },
  {
    title: t('pages.setting.table.header.type'),
    align: 'center',
    colKey: 'type',
    width: 100,
  },
  { title: t('pages.setting.table.header.status'), align: 'center', colKey: 'isActive', width: 80 },
  {
    title: t('pages.setting.table.header.operate'),
    colKey: 'op',
    align: 'center',
    fixed: 'right',
    width: 200,
  },
];
