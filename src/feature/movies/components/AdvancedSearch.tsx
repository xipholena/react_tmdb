import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectInput from '@/shared/components/SelectInput.tsx';
import NumberInput from '@/shared/components/NumberInput/NumberInput.tsx';
import CheckboxInput from '@/shared/components/CheckboxInput.tsx';
import { AdvancedOptions } from '@/shared/api/interfaces.ts';
import { ParameterKeys } from '@/shared/enums.ts';
import useAdvancedSearch from '../hooks/useAdvancedSearch.ts';
import style from '../styles/Search.module.css';

interface Props {
  updateOptions: (key: string, value: string | number | boolean) => void;
  advancedOptions: AdvancedOptions;
}

const AdvancedSearch = ({ updateOptions, advancedOptions }: Props) => {
  const { languageOptions, countryOptions } = useAdvancedSearch();
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content">
          <Typography component="span">Advanced Search Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className={style.advancedFilters}>
              <div className={style.field}>
                <SelectInput
                  label="Language"
                  resetOption="All languages"
                  options={languageOptions}
                  value={advancedOptions[ParameterKeys.language]}
                  handler={(e) => updateOptions(ParameterKeys.language, e.target.value)}
                  size="small"
                />
              </div>
              <div className={style.field}>
                <NumberInput
                  label={'Release year'}
                  value={advancedOptions[ParameterKeys.primary_release_year]}
                  handler={(e) =>
                    updateOptions(ParameterKeys.primary_release_year, Number(e.target.value || 0))
                  }
                  min={1900}
                  max={2100}
                />
              </div>
              <div className={style.field}>
                <NumberInput
                  label={'Year'}
                  value={advancedOptions[ParameterKeys.year]}
                  handler={(e) => updateOptions(ParameterKeys.year, Number(e.target.value || 0))}
                  min={1900}
                  max={2100}
                />
              </div>
              <div className={style.field}>
                <SelectInput
                  label="Region"
                  resetOption="All regions"
                  options={countryOptions}
                  value={advancedOptions[ParameterKeys.region]}
                  handler={(e) => updateOptions(ParameterKeys.region, e.target.value)}
                  size="small"
                />
              </div>
              <div className={style.field}>
                <NumberInput
                  label={'Page'}
                  value={advancedOptions[ParameterKeys.page]}
                  handler={(e) => updateOptions(ParameterKeys.page, Number(e.target.value || 1))}
                  min={1}
                  max={500}
                />
              </div>
            </div>
            <CheckboxInput
              handler={(e) => updateOptions(ParameterKeys.include_adult, e.target.checked)}
              value={advancedOptions[ParameterKeys.include_adult]}
              label="Include Adult Content"
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AdvancedSearch;
