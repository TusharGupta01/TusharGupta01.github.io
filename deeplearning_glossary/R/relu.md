## ReLU

Rectified linear units, or reLU, are used as activation function in Deep Neural Networks. They are represented or defined as f(x) = max(x, 0), which means:

> If input is negative or zero, output is 0. <br>
> If input is positive, output is equal to input.

The advantages of ReLUs over functions like tanh or sigmoid is that they are sparse and they deal well with [vanishing gradient](../V/vanishing_gradient.md) problem.
 

### Varients of ReLU 

1. [Leaky ReLUs](../L/leaky_relu.md)
2. [Parametric ReLU (PReLU)](../P/prelu.md)
3. [Smoother softplus approximation](../S/ssprelu.md)

### Related Papers and Summary

1. Rectified Linear Units Improve Restricted Boltzmann Machines [Paper](http://www.cs.toronto.edu/~fritz/absps/reluICML.pdf) and [Summary](../paper/)
2. Delving Deep into Rectifiers: Surpassing Human-Level Performance on ImageNet Classification [Paper](https://arxiv.org/abs/1502.01852) and [Summary](../paper/)