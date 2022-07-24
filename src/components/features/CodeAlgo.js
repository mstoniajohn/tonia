import { Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { CopyBlock, CodeBlock, dracula, github, atomOneDark } from "react-code-blocks";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const CodeAlgo = () => {
    const classes = useStyles();
    const [code, setCode] = useState({
        'bubbleSort':`
    def bubble_sort(arr):
        for i in range(len(arr) - 1, 0, -1):
            for j in range(i):
                if arr[j] > arr[j + 1]:
                    tmp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = tmp
    return arr`,
        selectionSort: `
        def swap(a, b, arr):
            if a != b:
                tmp = arr[a]
                arr[a] = arr[b]
                arr[b] = tmp

        def selection_sort(nums):
            for i in range(len(nums) - 1):
                min_index = i
                for j in range(i + 1, len(nums)):
                    if nums[j] < nums[min_index]:
                        min_index = j
                if i != min_index:
                    swap(i, min_index, nums)
            return nums
        `,
        insertionSort: `
        def insertion_sort(nums):
            for i in range(1, len(nums)):
                # item
                temp = nums[i]
                j = i - 1

                while temp < nums[j] and j > -1:
                    nums[j + 1] = nums[j]
                    nums[j] = temp
                    j -= 1
            return nums
        `,
        mergeSort:
            `
            # Helper function to merge 2 arrays in sorted order
            def merge(num1, num2):
                sorted_list = []
                p1 = 0
                p2 = 0

                while p1 < len(num1) and p2 < len(num2):  # [235] [467]
                    if num1[p1] < num2[p2]:
                        sorted_list.append(num1[p1])
                        p1 += 1
                    else:
                        sorted_list.append(num2[p2])
                        p2 += 1

                while p1 < len(num1):
                    sorted_list.append(num1[p1])
                    p1 += 1

                while p2 < len(num2):
                    sorted_list.append(num2[p2])
                    p2 += 1

                return sorted_list


            # Recursively break list into halves to perform merge sort
            def merge_sort(nums):
                if len(nums) == 1:
                    return nums
                # break in halves
                mid = int(len(nums) / 2)  # for odd lengths
                left = nums[:mid]
                right = nums[mid:]
                return merge(merge_sort(left), merge_sort(right))
        `
    }
    )
    return (
        <div className='max-w-2xl mx-auto py-10'>
            <Typography variant='h4' color="secondary">Data Structures and Algorithms in Python</Typography>
                         <Typography variant='h5' className='py-2 text-center'>Sorting Algorithms</Typography>

           
            <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
                        {/* <Typography className={classes.heading}>Accordion 1</Typography> */}
                         <Typography className={classes.heading}>Bubble Sort</Typography>
        </AccordionSummary>
        <AccordionDetails>
           <CopyBlock
                            text={code.bubbleSort}
                            className="w-full"
                            
      language="python"
        showLineNumbers={true}
      startingLineNumber={1}
                            theme={atomOneDark}
                            codeBlock
                wrapLines
            />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Selection Sort</Typography>
        </AccordionSummary>
        <AccordionDetails className='w-full mx-auto text-center'>
                        <CopyBlock
                            className="w-full mx-auto"
      text={code.selectionSort}
      language="python"
        showLineNumbers={true}
      startingLineNumber={1}
                            theme={atomOneDark}
                            codeBlock
                            
                wrapLines
            />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Insertion Sort</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CopyBlock
                            className="w-full"
      text={code.insertionSort}
      language="python"
        showLineNumbers={true}
      startingLineNumber={1}
                            theme={atomOneDark}
                            codeBlock
                            
                wrapLines
            />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Merge Sort</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CopyBlock
                            className="w-full mx-auto"
      text={code.mergeSort}
      language="python"
        showLineNumbers={true}
      startingLineNumber={1}
                            theme={atomOneDark}
                            codeBlock
                            
                wrapLines
            />
                    </AccordionDetails>
                </Accordion>
                
    </div>

            

   
            </div>
  )
}

export default CodeAlgo